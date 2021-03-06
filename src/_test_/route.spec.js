const request = require('supertest')
const app = require('../server/server.js')




describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/getGeoname')
      .send({
        location: "paris",
        startDate: "2021/12/20",
        endDate:"2021/12/30"
      })
    expect(res.statusCode).toEqual(200)
    
    
  })
})
