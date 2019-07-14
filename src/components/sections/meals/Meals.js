import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

export default class Meals extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col>
            <h1>Meals</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="8">
            <h2>Breakfast</h2>
            <Table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity (g/ml/unit)</th>
                  <th>Calories</th>
                  <th>Protein</th>
                  <th>Carbs</th>
                  <th>Fats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Protein Powder</td>
                  <td>1</td>
                  <td>107</td>
                  <td>40</td>
                  <td>5.4</td>
                  <td>3.6</td>
                </tr>
                <tr>
                  <td>Protein Powder</td>
                  <td>1</td>
                  <td>107</td>
                  <td>40</td>
                  <td>5.4</td>
                  <td>3.6</td>
                </tr>
                <tr>
                  <td>Protein Powder</td>
                  <td>1</td>
                  <td>107</td>
                  <td>40</td>
                  <td>5.4</td>
                  <td>3.6</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Breakfast</h2>
            <Table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity (g/ml/unit)</th>
                  <th>Calories</th>
                  <th>Protein</th>
                  <th>Carbs</th>
                  <th>Fats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Protein Powder</td>
                  <td>1</td>
                  <td>107</td>
                  <td>40</td>
                  <td>5.4</td>
                  <td>3.6</td>
                </tr>
                <tr>
                  <td>Protein Powder</td>
                  <td>1</td>
                  <td>107</td>
                  <td>40</td>
                  <td>5.4</td>
                  <td>3.6</td>
                </tr>
                <tr>
                  <td>Protein Powder</td>
                  <td>1</td>
                  <td>107</td>
                  <td>40</td>
                  <td>5.4</td>
                  <td>3.6</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    )
  }
}
