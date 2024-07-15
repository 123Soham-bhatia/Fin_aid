import AuthPage from './AuthPage';
import Allgoals from './Allgoals';
import TransactionForm from './TransactionForm';
import FiltersPage from './FiltersPage';
import RiskCategoriesPage from './RiskCategoriesPage';
import SafeOptionArticle from './SafeOptionArticle';
import SpendWiselyArticle from './SpendWiselyArticle';
import SavingMoneyArticle from './SavingMoneyArticle';
import MediumRiskInvestmentArticle from './MediumRiskInvestmentArticle';
import HighRiskInvestmentArticle from './HighRiskInvestmentArticle';
import BestSavingOptionArticle from './BestSavingOptionArticle';
import GoalsPage from './GoalsPage';
import Footer from './Footer';
import Home from './home';
import TransactionsComponent from './TransactionsComponent';
import UserPage from './UserPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Analysis from './Analysis';
import Advice from './Advice';
import Profile from './Profile';
import './App.css';

function App() {
  return (
  <>
  <BrowserRouter >
  <Routes>
    <Route exact path='/' element = {<Home />} />
    <Route exact path='/goals' element = {<GoalsPage />} />
    <Route exact path='/profile' element ={<AuthPage />} />
    <Route exact path='/investment_tips' element ={<RiskCategoriesPage />} />
    <Route exact path='/save_money' element ={<SavingMoneyArticle />} />
    <Route exact path='/safe_option' element={<SafeOptionArticle />} />
    <Route exact path='/mid_option' element={<MediumRiskInvestmentArticle />} />
    <Route exact path='/high_option' element={<HighRiskInvestmentArticle />} />
    <Route exact path='/best_option' element={<BestSavingOptionArticle />} />
    <Route exact path='/spend_wisely' element={<SpendWiselyArticle />} />
    <Route exact path='/budget_planning' element={<TransactionForm />} />
    <Route exact path='/readtransaction' element={<TransactionsComponent />} />
    <Route exact path='/profile' element={<UserPage />} />
    <Route exact path='/use_Filter' element={<FiltersPage />} />
    <Route exact path='/all_goals' element={<Allgoals />} />
    <Route exact path='/analysis' element={<Analysis />} />
    <Route exact path='/advice' element={<Advice />} />
    <Route exact path='/profilepage' element={<Profile />} />
  </Routes>
  </BrowserRouter>

  <Footer />
  </>
  
  );
}

export default App;
