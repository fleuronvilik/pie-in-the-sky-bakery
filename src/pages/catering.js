import React from "react"
import Layout from "../components/layout"

export default function Catering() {
  return (
    <Layout withSidebar={true} childrenClassName={"content"}>
      <article>
        <h2>Catering</h2>
        <img className="floatright" src="/gallery/whole-pie-buffet.jpg" alt="Whole pie buffet."/>

        <p>We love pie, and we know your guests will too! We can make any combination of pies for your special event, whether it's a company lunch, a family birthday, or a lavish wedding. Please contact us with the details of your event, and we'll be happy to work with you to create the perfect selection of pies.</p>

        <p>Choose your bottom crust:</p>
        <ul>
          <li>Classic</li>
          <li>Gluten-Free Classic</li>
        </ul>

        <p>Choose your filling</p>
        <ul>
          <li>Apple</li>
          <li>Blueberry</li>
          <li>Cherry</li>
          <li>Chess</li>
          <li>Mixed Berry</li>
          <li>Puddin' (Chocolate Creme)</li>
          <li>Banana Creme</li>
          <li>Lemon Custard</li>
          <li>Key Lime</li>
          <li>Dixie Pecan</li>
          <li>Shoofly</li>
          <li>Strawberry-Rhubarb (spring only)</li>
          <li>Peach (summer only)</li>
          <li>Pumpkin (autumn/winter only)</li>
          <li>Royal Mincemeat (autumn/winter only)</li>
          <li>No-Sugar-Added Blueberry</li>
          <li>No-Sugar-Added Cherry</li>
          <li>No-Sugar-Added Mixed Berry</li>
          <li>No-Sugar-Added Strawberry-Rhubarb (spring only)</li>
          <li>No-Sugar-Added Peach (summer only)</li>
        </ul>

        <p>Choose your top crust:</p>
        <ul>
          <li>Full</li>
          <li>Lattice</li>
          <li>Crumb (fruit pies only)</li>
          <li>Meringue (lemon only)</li>
          <li>Whipped Cream (Puddin', Banana Creme, Key Lime only)</li>
          <li>Gluten-Free Full</li>
          <li>Gluten-Free Lattice</li>
        </ul>

        <p>Have a special filling request? A fancy crust? We'd love to make your dream come true!</p>
      </article>
    </Layout>
  )
}