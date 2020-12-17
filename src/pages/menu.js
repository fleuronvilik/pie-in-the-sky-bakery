import React from "react"
import Layout from "../components/layout"

export default function Menu() {
  return (
    <Layout withSidebar={true} childrenClassName={"content"}>
      <article>
        <h2>Menu</h2>

        <article>
          <h3>Pies by the slice $4.95</h3>
          <img src="/gallery/peach-pie.jpg" alt="Peach pie."/>
          <p>Enjoy a generous slice of any of our pies in the shop, or take a slice to go. You'll always find classic favorites like our signature Chess Pie, All-American Apple, Blueberry, Cherry, Pudtin' (Chocolate Creme), Banana Creme, Lemon Meringue, and Dixie Pecan, as well as seasonal specials like Strawberry Rhubarb, Georgia Peach, Shoofly, Pumpkin, or Royal Mincemeat.</p>
        </article>

        <article>
          <h3>À la mode $1.25 per scoop</h3>
          <img src="/gallery/cherry-alamode.jpg" alt="Cherry pie with ice cream."/>
          <p>Top any slice of pie with a scoop of ice cream! Choose from French vanilla, chocolate fudge, dulce de leche, mocha chip, mint chocolate chip, sweet cherry, and no-sugar-adted vanilla (sweetened with Splenda tm). All ice cream flavors are also available by the pint ($4.95) to take home.</p>
        </article>

        <article>
          <h3>Mini-pies $8</h3>
          <img src="/gallery/mini-pies.jpg" alt="Mini pies."/>
          <p>When one slice just isn't enough! Our 6" mini-pies are sized to share. Perfect for a romantic picnic or as the finishing touch for a dinner for two. Kids can't agree on a flavor? Two mini-pies are the ticket to family harmony.</p>
        </article>

        <article>
          <h3>Whole-pies $8</h3>
          <img src="/gallery/lemon-meringue.jpg" alt="Lemon meringue pie."/>
          <p>Need a quick and delicious dessert? Our whole pies serve six. They're the perfect ending to a weeknight meal or a weekend barbeque. (They make a great breakfast treat too!) Don't forget to pick up a pint of our ice cream - the ideal accompaniment to our delectable pies.</p>
        </article>

        <h3>Specialty pies</h3>
        <dl>
        <dt>Gluten-free crusts $16.95</dt>
        <dd>Our gluten-free crusts are made especially for us by a national gluten-free bakery so you can be assured of high quality. We use good safety procedures in our kitchen to prevent cross-contamination. If you need more information about how we work to keep our customers with food allergies safe, please contact us.</dd>

        <dt>No-sugar-adted pies $15.95</dt>
        <dd>Now everyone can enjoy a nice slice of pie! Our no-sugar-adted fruit pies are sweetened with Splenda(tm). We even have no-sugar-adted ice cream to top off your slice of pie.</dd>

        <dt>Nut-free pies</dt>
        <dd>With the exception of our Dixie Pecan Pie, all of our pies and pie crusts are nut-free. We use good safety procedures in our kitchens to prevent cross-contamination. If you need more information about how we work to keep our customers with food allergies, safe, please contact us.</dd>
        </dl>
      </article>
    </Layout>
  )
}