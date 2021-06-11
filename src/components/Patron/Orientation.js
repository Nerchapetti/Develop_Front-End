import React from 'react'
import "./orientation.css"


const Orientation = () => {
    return (
        <div className="orientation">
          {/* <div className="dates">
              <h3>Date of orientation</h3>
              <ul>
                  <li>31-12-1994 (Sub-Deacon)</li>
                    <li>15-08-1995 (Deacon)</li>
                    <li>23-09-1995 (Priest)</li>
              </ul>
          </div> */}
          <div className="tabledata">
              <h1 className="tablehead">List of Churches and Institutions Served</h1>
              <table border="1">
                  <tr>
                      <th>S No</th>
                      <th>Churches</th>
                      <th>Institutions</th>
                      <th>Year</th>
                  </tr>
                  <tr>
                      <td className="no">1</td>
                      <td>St. Mary’s Orthodox Church, Chandigarh</td>
                      <td>St. Mary’s School, Chandigarh (Chairman)</td>
                      <td>	2014-onwards</td>
                  </tr>
                  <tr>
                      <td className="no">2</td>
                      <td>St. Mary’s Orthodox Church, Chandigarh</td>
                      <td>St. Mary’s School, Chandigarh (Chairman)</td>
                      <td>	2014-onwards</td>
                  </tr>
                  <tr>
                      <td className="no">3</td>
                      <td>St. Mary’s Orthodox Church, Chandigarh</td>
                      <td>St. Mary’s School, Chandigarh (Chairman)</td>
                      <td>	2014-onwards</td>
                  </tr>
                  <tr>
                      <td className="no">4</td>
                      <td>St. Mary’s Orthodox Church, Chandigarh</td>
                      <td>St. Mary’s School, Chandigarh (Chairman)</td>
                      <td>	2014-onwards</td>
                  </tr>
              </table>
          </div>
      </div>
    )
}

export default Orientation
