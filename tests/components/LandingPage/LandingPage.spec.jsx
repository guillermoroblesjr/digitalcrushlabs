/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import LandingPage from 'components/LandingPage/LandingPage'

describe('(Component) LandingPage', () => {
  describe(`LandingPage with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <LandingPage />
      )
    })

    it(`Contains the 'LandingPage' class.`, () => {
      const el = wrapper.find('div.LandingPage')
      expect(el).to.exist
    })
  })

  describe(`LandingPage with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let landingPageProps = {}

    beforeEach(() => {
      middlewares = [ thunk ]
      mockStore = configureMockStore(middlewares)
      store = mockStore({
        lob: {
          pick: '123'
        },
        userWants: {
          need: 'XXX'
        },
        lobDependantList: 'lobDependantList',
        geosuggestLocation: 'geosuggestLocation',
        wmUsNav: 'wmUsNav',
        masData: 'masData',
        mapLocationDetails: {
          userAddress: '123'
        },
        smartySuggestion: {
          suggestions: [{
            city: 'city',
            state: 'state',
            street: 'street'
          }]
        },
      })
      landingPageProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <LandingPage {...landingPageProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
