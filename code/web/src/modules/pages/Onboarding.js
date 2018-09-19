// Imports
import React, { PureComponent } from 'react';
// App Imports
import { APP_URL } from '../../setup/config/env';
import Button from '../../ui/button';
import { white } from '../../ui/common/colors';
import { textLevel1 } from '../../ui/common/shadows';
// UI Imports
import { Grid, GridCell } from '../../ui/grid';
import Modal from '../../ui/modal/Modal';
import { H1, H6 } from '../../ui/typography';



// Component
class Onboarding extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      currentStep: 0
    }
  }

  componentDidMount() {
    const onboarding = window.localStorage.getItem('onboarding')
    if (!onboarding) {
      this.toggleVisible(true)

      window.localStorage.setItem('onboarding', 1)
    }
  }

  toggleVisible = (visible) => {
    this.setState({
      visible
    })
  }

  nextStep = () => {
    this.setState(state => ({
      currentStep: state.currentStep + 1
    }))
  }

  close = () => {
    this.toggleVisible(false)
  }

  render() {
    const steps = [/* 1. Welcome to Crate */
      <Grid alignCenter={true} style={{ height: "100%", textAlign: "center", color: white }}>
        {/* Left - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>
            Добро пожаловать
          </H1>

          <H6 style={{ marginTop: "0.5em" }}>
            В систему подписки на информационные пакеты <br /> для оптовых покупателей и дилеров ТМ Феникс
          </H6>

          <Button theme="primary" style={{ marginTop: "1.5em" }} onClick={this.nextStep}>
            Вперед
          </Button>
        </GridCell>

        {/* Right - Image */}
        <GridCell>
          <img src={`${APP_URL}/images/collage.png`} alt="collage" title="коллаж товаров" style={{ width: 400 }} />
        </GridCell>
      </Grid> /* 2. For Wholesale */, <Grid alignCenter={true} style={{ height: "100%", textAlign: "center", color: white }}>
        {/* Left - Image */}
        <GridCell>
          <img src={`${APP_URL}/images/collage.png`} alt="collage" title="коллаж товаров" style={{ width: 400 }} />
        </GridCell>

        {/* Right - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>
            Оптовым покупателям
          </H1>

          <H6 style={{ marginTop: "0.5em" }}>
            Подписка на информационные <br />
            пакеты ТМ Феникс
            <br /> Межкомнатные и входные двери
            <br />
            Арки
            <br />
            МДФ накладки
          </H6>

          <Button theme="primary" style={{ marginTop: "1.5em" }} onClick={this.nextStep}>
            Вперед
          </Button>
        </GridCell>
      </Grid> /* 3. For Dealers */, <Grid alignCenter={true} style={{ height: "100%", textAlign: "center", color: white }}>
        {/* Left - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>
            Дилерам
          </H1>

          <H6 style={{ marginTop: "0.5em" }}>
            Подписка на информационные <br />
            пакеты ТМ Феникс
            <br /> Межкомнатные и входные двери
            <br />
            Арки
            <br />
            МДФ накладки
          </H6>

          <Button theme="primary" style={{ marginTop: "1.5em" }} onClick={this.nextStep}>
            Вперед
          </Button>
        </GridCell>

        {/* Right - Image */}
        <GridCell>
          <img src={`${APP_URL}/images/collage.png`} alt="collage" title="коллаж товаров" style={{ width: 400 }} />
        </GridCell>
      </Grid> /* 4. Fix me up */, <Grid alignCenter={true} style={{ height: "100%", textAlign: "center", color: white }}>
        {/* Center - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>
            ТМ Феникс
          </H1>

          <H6 style={{ marginTop: "0.5em" }}>
            Подпишитесь на информационные пакеты!
          </H6>

          <Button theme="primary" style={{ marginTop: "1.5em" }} onClick={this.close}>
            Старт
          </Button>
        </GridCell>
      </Grid>];

    return (
      <div>
        {/* Modal */}
        <Modal visible={this.state.visible}>
          {steps[this.state.currentStep]}
        </Modal>
      </div>
    )
  }
}

export default Onboarding
