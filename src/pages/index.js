import React from 'react'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'


const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Daniel <span>Woldegiorgis</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello there, welcome to my portfolio. I am a Software Developer
        that recently graduated from Williams College.
        </p>
        <DownloadButton href="https://github.com/ethioeph/new_website/raw/master/Daniel_Resumé.pdf"  download title="Resume">Download Resume</DownloadButton>
      </div>
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage;
