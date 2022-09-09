import React from 'react'
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;


const Home = () => {
  return (
    <Container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Container>
  )
}

export default Home