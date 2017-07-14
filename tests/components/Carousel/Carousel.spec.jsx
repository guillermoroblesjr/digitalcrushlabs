/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Carousel from 'components/Carousel/Carousel'

describe('(Component) Carousel', () => {
  describe(`Carousel with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Carousel />
      )
    })

    it(`Contains the 'Carousel' class.`, () => {
      const el = wrapper.find('div.Carousel')
      expect(el).to.exist
    })
  })

  describe(`Carousel with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let carouselProps = {}

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
      carouselProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Carousel {...carouselProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
