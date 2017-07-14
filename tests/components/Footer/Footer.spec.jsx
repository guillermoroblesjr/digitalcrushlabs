/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Footer from 'components/Footer/Footer'

describe('(Component) Footer', () => {
  describe(`Footer with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Footer />
      )
    })

    it(`Contains the 'Footer' class.`, () => {
      const el = wrapper.find('div.Footer')
      expect(el).to.exist
    })
  })

  describe(`Footer with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let footerProps = {}

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
      footerProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Footer {...footerProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
