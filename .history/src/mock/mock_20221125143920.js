mport axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { def } from '@vue/shared'

export default {
  /**
   * mock bootstrap
   */
}
bootstrap () {
  let mock = new MockAdapter(axios)
  //mock success request
  mock.onGet('/success').reply(200, {
    msg: 'success'
  })
  //mock error request
  mock.onGet('/error').reply(500, {
    msg: 'failure'
  })
};