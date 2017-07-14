/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import ThreeSixtyDegreeView from 'components/ThreeSixtyDegreeView/ThreeSixtyDegreeView'

describe('(Component) ThreeSixtyDegreeView', () => {
  describe(`ThreeSixtyDegreeView with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <ThreeSixtyDegreeView />
      )
    })

    it(`Contains the 'ThreeSixtyDegreeView' class.`, () => {
      const el = wrapper.find('div.ThreeSixtyDegreeView')
      expect(el).to.exist
    })
  })

  describe(`ThreeSixtyDegreeView with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let threeSixtyDegreeViewProps = {}

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
      threeSixtyDegreeViewProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <ThreeSixtyDegreeView {...threeSixtyDegreeViewProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
