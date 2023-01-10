import React, { Component } from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import Auxilary from '../../hoc/Auxilary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'



const INGREDIENT_PRICES = {
  salad : 0.5,
  chutney : 0.7,
  cheese: 0.4,
  tikki  : 1.3
}

class BurgerBuilder extends Component {
  state= {
    ingredients: null,
     totalPrice :4,
     purchaseable: false,
     purchasing: false,
     loading:false,
  }

  componentDidMount() {
    axios.get('/ingredients.json')
    .then(res => {
      this.setState({ingredients: res.data})
    })
  }
  updatePurchaseState (ingredients) {

    const sum = Object.keys(ingredients)
    .map(igKey => {
    return ingredients[igKey];
    })
    .reduce((sum ,el) => {
      return sum +el;
        },0);
        this.setState({purchaseable : sum >0});
  };
  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }
  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0 ){
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }
  
  purchaseHandler = () => {
    this.setState({purchasing: true});
  }
  purchaseCancleHandler = () => {
    this.setState({purchasing: false});
  }
  purchaseContinueHandler = () => {

    this.setState({loading:true});

    const order ={
      ingredients: this.state.ingredients,
      price:this.state.totalPrice,
      coustmer:{
        name:'jenil',
        address:{
          street: 'Simadanaka',
          zipCode: '395006',
          country: 'India'
        },
        email: 'admin@admin.com'
      },
      delivaryMethod: 'fastest'
    }
    axios.post('/orders.json',order)
    .then(res => {
      this.setState({loading:false, purchasing:false});
    })
    .catch(error => {
      this.setState({loading:false, purchasing:false});
    });
  }
  render() {
    const disableInfo ={
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] =  disableInfo[key] <= 0
    }


    let orderSummary = null;

    let burger = <Spinner />

    if (this.state.ingredients) {

      burger = (
        <Auxilary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
        ingredientAdded={this.addIngredientsHandler} 
        ingredientRemove={this.removeIngredientsHandler}
        disabled={disableInfo}
        price={this.state.totalPrice}
        ordered={this.purchaseHandler}
        purchaseable={this.state.purchaseable}
        />
        </Auxilary>
        );
        orderSummary =<OrderSummary 
        purchaseCancle={this.purchaseCancleHandler}
        purchaseContinue={this.purchaseContinueHandler}
        price={this.state.totalPrice}
        ingredients={this.state.ingredients} />
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
     
    return (
      <Auxilary>
        <Modal modalClosed={this.purchaseCancleHandler} show={this.state.purchasing}>
         {orderSummary}
          </Modal>
        {burger}
      </Auxilary>
        
    )
  }
}

export default withErrorHandler(BurgerBuilder , axios);