import React from 'react';
import Section from '../../section/Section';
import Profile from '../userprofile/Profile';
import Statistics from '../statistics/Statistics';
import FriendList from '../friendlist/FriendList';
import TransactionHistory from '../transactions/TransactionHistory';

import statisticalData from '../../../services/statistical-data.json';
import user from '../../../services/user.json';
import friends from '../../../services/friends.json';
import transactions from '../../../services/transactions.json';

import './App.css';


export default function App(){
  const {name,tag,location,avatar,stats} = user;
  return (
  <main>
    <div className = "container">
    <Section title="User profile">
      <Profile
      name={name}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
      />
    </Section>

    <Section title="Statistics">
      <Statistics title="Upload stats" stats={statisticalData} />
    </Section>

    <Section title="Friends">
      <FriendList friends={friends} />
    </Section>

    <Section title="Transactions">
      <TransactionHistory items={transactions} />
    </Section>
    </div>
  </main>
  );
}
