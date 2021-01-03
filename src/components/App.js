import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import statisticalData from '../components/statistical-data.json';
import user from '../components/user.json';
import friends from '../components/friends.json';
import transactions from '../components/transactions.json';


export default function App(){
  return (
  <>
    <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />

    <Statistics stats={statisticalData} />
    <Statistics title="Upload stats" stats={statisticalData} />

    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
  );
}
