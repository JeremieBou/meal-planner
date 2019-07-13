import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

export default class Results extends React.Component {
  render () {
    return (
      <Row>
        <Col>
          <h1>Results</h1>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th colspan="2">In Meal Plan</th>
                <th colspan="2">Goal</th>
              </tr>
              <tr>
                <th></th>
                <th>Daily Average</th>
                <th>% of Calories</th>
                <th>Daily Average</th>
                <th>% of Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>3000</td>
                <td>100%</td>
                <td>3200</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>200</td>
                <td>20%</td>
                <td>200</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>200</td>
                <td>20%</td>
                <td>200</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Fats</td>
                <td>200</td>
                <td>20%</td>
                <td>200</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Costs</td>
                <td>200</td>
                <td>20%</td>
                <td>200</td>
                <td>20%</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    )
  }
}
