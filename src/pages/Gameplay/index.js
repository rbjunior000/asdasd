import React, {Component} from 'react';

import CS from '../../assets/skills/coldsnap.png'
import MT from '../../assets/skills/meteoro.png'
import AL from '../../assets/skills/alacrity.png'
import BG from '../../assets/skills/barreiragelo.png'
import BT from '../../assets/skills/blasty.png'
import FG from '../../assets/skills/forgespirit.png'
// import TR from '../../assets/skills/furacao.png'
import SS from '../../assets/skills/sunstrike.png'
import EM from '../../assets/skills/emp.png'
import { Container } from './styles';

export default class Gameplay extends Component {
    state = {
        type:'',
        skills: [
            {
                name: 'coldsnap',
                key: 'qqq',
                url: CS
            },
            {
                name: 'meteoro',
                key: 'eew',
                url: MT

            },
            {
                name: 'EMP',
                key: 'www',
                url: EM

            },
            {
                name: 'gelo',
                key: 'qqe',
                url: BG

            },
            {
                name: 'forgespirit',
                key: 'eeq',
                url: FG

            },
            {
                name: 'alacrity',
                key: 'wwe',
                url: AL

            },
            {
                name: 'sunstrike',
                key: 'eee',
                url: SS

            },
            {
                name: 'blasty',
                key: 'qwe',
                url: BT

            },
        ],
        randomURL: '',
    }

    componentDidMount() {
        const {skills} = this.state
        const skill = skills[Math.floor(Math.random()*skills.length)];
        this.setState({randomURL: skill.url})
    }

     handleInputChange = async e => {
        e.preventDefault();
        await this.setState({ type: e.target.value})

        if (this.state.type.length === 3) {
            this.handleSubmit();
        }
    }

    handleRandom = e => {
        const {skills} = this.state
        const skill = skills[Math.floor(Math.random()*skills.length)];
        this.setState({randomURL: skill.url})
    }

    handleSubmit() {
        const {type, skills} = this.state;
        if (type.length === 3){
        const response = skills.find(function(item) {
            return item.key === type
        })
        if (response && response.url === this.state.randomURL) {
            this.setState({type: ''})
            this.handleRandom();
          }
    }

        
    }
  
    render() {
    const {type,randomURL} = this.state
      return (
          <Container>
              <img src={randomURL} alt="skill"/>
              <form onSubmit={this.handleSubmit}>
                <input
                    value={type}
                    onChange={this.handleInputChange}
                    maxLength="3"
              />
              <button type="submit" />
              </form>
          </Container>
      )
  }
}
