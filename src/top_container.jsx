

import Image from 'react-bootstrap/Image';
import { ListGroup } from 'react-bootstrap';
import Stone from '../src/assets/penny_stone.png';

function ContainerTop() {
  return <section className="jumbotron text-center">
  <div className="container">


    <Image src={Stone} fluid></Image> 
    <section>
      <p className="fw-bold d-flex align-middle">A 7 cm bladder stone in a French Bulldog is very serious.</p>

<p   className="d-flex align-items-start">Here’s why:</p>

<p   className="d-flex align-items-start">Size relative to the dog – French Bulldogs are small dogs (typically 11–12 kg / 25 lb). A 7 cm stone is <b>ENOURMOUS</b> for such a small bladder. It can fill much of the bladder and obstruct urine flow.</p>
<ListGroup as="ol"    className="d-flex align-items-start" numbered >Potential complications:
<ListGroup.Item
        as="li"
        className="d-flex align-items-start"
      >Urinary obstruction → can lead to inability to urinate, which is life-threatening.</ListGroup.Item>
<ListGroup.Item as="li">Bladder rupture → if the bladder wall is stretched too much.</ListGroup.Item>
<ListGroup.Item as="li">Infection / hematuria → stones often irritate the bladder lining, causing bleeding or infection.</ListGroup.Item>
<ListGroup.Item as="li">Pain / distress → very uncomfortable and can lead to systemic illness.</ListGroup.Item>
     
    </ListGroup>

    <p>Treatment:
Surgery (cystotomy) is usually required for stones of this size in small dogs.

Waiting or trying medical dissolution is generally not viable for a stone this large.</p>



</section>





    
  </div>
</section>
}

export default ContainerTop;