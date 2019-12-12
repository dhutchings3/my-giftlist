import React, {Component} from 'react';
import UserSignup from './UserSignup/UserSignup';
import ListContext from './ListContext';

class LandingPage extends Component {

  static contextType = ListContext;
  

  render () {
    return (
      <div className='main_content'>
        <section>
        <header>
            <h3>Create your first list</h3>
        </header>
        <p>[<em>placeholder for screenshot of list creation interface</em>]</p>
        <p>The holidays can be a hectic time of year, but My-GiftList can help you stay organized. You can add all of your holiday gift wishes to a list stored to your account. </p>
        </section>

      <section>
        <header>
            <h3>Update your list(coming soon)</h3>
        </header>
        <p>[<em>placeholder for screenshot of changing list interface</em>]</p>
        <p>As your creating your list you may add something you later want to remove, or forgot something while creating it. With My-Giftlist you are able to remove any item from the list, as well as add to it. Additionally, your list will be saved to your account for you to revisit and make changes at any time.</p>
      </section>

        <UserSignup />
      
      </div>
    );
  }

}

export default LandingPage;