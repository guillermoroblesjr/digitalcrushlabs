/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Marketing1 from 'components/Marketing1/Marketing1'

describe('(Component) Marketing1', () => {
  describe(`Marketing1 with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Marketing1 />
      )
    })

    it(`Contains the 'Marketing1' class.`, () => {
      const el = wrapper.find('div.Marketing1')
      expect(el).to.exist
    })
  })

  describe(`Marketing1 with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let marketing1Props = {}

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
      marketing1Props = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Marketing1 {...marketing1Props}/>
      )
    })

    it(`????`, () => {

    })
  })
})
