import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

export default class Schedule extends React.Component {
  render () {
    return (
      <Row>
        <Col>
          <h1>Schedule</h1>
          <Table>
            <thead>
              <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Meal 1</td>
                <td>Meal 1</td>
                <td>Meal 1</td>
                <td>Meal 1</td>
                <td>Meal 1</td>
                <td>Meal 1</td>
                <td>Meal 1</td>
              </tr>
              <tr>
                <td>Meal 2</td>
                <td>Meal 2</td>
                <td>Meal 2</td>
                <td>Meal 2</td>
                <td>Meal 2</td>
                <td>Meal 2</td>
                <td>Meal 2</td>
              </tr>
              <tr>
                <td>Meal 3</td>
                <td>Meal 3</td>
                <td>Meal 3</td>
                <td>Meal 3</td>
                <td>Meal 3</td>
                <td>Meal 3</td>
                <td>Meal 3</td>
              </tr>
              <tr>
                <td>Meal 3</td>
                <td>Meal 3</td>
                <td>Meal 3</td>
                <td>Meal 3</td>
                <td>Meal 3</td>
                <td>Meal 3</td>
                <td>Meal 3</td>
              </tr>
              <tr>
                <td></td>
                <td>Post Workout</td>
                <td>Post Workout</td>
                <td></td>
                <td>Post Workout</td>
                <td>Post Workout</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    )
  }
}
