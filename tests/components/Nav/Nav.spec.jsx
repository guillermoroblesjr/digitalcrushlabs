/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Nav from 'components/Nav/Nav'

describe('(Component) Nav', () => {
  describe(`Nav with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Nav />
      )
    })

    it(`Contains the 'Nav' class.`, () => {
      const el = wrapper.find('div.Nav')
      expect(el).to.exist
    })
  })

  describe(`Nav with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let navProps = {}

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
      navProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Nav {...navProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
