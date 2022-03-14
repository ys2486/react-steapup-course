import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templetes/DefaultLayout';
import { HeaderOnly } from './components/templetes/HeaderOnly';
import { Router } from './router/Router';

const user = {
  name: '須藤',
  image: 'https://source.unsplash.com/Mv9hjnEUHR4',
  email: '1235@example.com',
  phone: '090-1111-2222',
  company: {
    name: 'テスト株式会社',
  },
  website: 'https://google.com',
};

function App() {
  return (
    <Router />
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <PrimaryButton>テスト</PrimaryButton>
    //     <SecondaryButton>検索</SecondaryButton>
    //     <br />
    //     <SearchInput />
    //     <UserCard user={user} />
    //   </DefaultLayout>
    // </BrowserRouter>
  );
}

export default App;
