/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import MobileCompatible from 'components/MobileCompatible/MobileCompatible'

describe('(Component) MobileCompatible', () => {
  describe(`MobileCompatible with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <MobileCompatible />
      )
    })

    it(`Contains the 'MobileCompatible' class.`, () => {
      const el = wrapper.find('div.MobileCompatible')
      expect(el).to.exist
    })
  })

  describe(`MobileCompatible with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let mobileCompatibleProps = {}

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
      mobileCompatibleProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <MobileCompatible {...mobileCompatibleProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
