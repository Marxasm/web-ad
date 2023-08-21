import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './../assets/grandma.png';
import myMap from './../assets/map.png';
import './styles.css'; 

function Index() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <h1>Have You Noticed a Decline in Your Memory? Exercise May Help</h1>
          <p>
            <strong>Research Centre:</strong> The University of Sydney
          </p>
          <p>
            <strong>Location:</strong> Cumberland Campus, The University of Sydney, 75 East St Lidcombe, NSW
          </p>
          <p>
            <strong>Lead Doctor:</strong> Dr. Maria Fiatarone Singh
          </p>
          <p>
            <strong>Ethics Committee:</strong> This study has been reviewed and approved by The University of Sydney Human Research Ethics Committee
          </p>
          
          {/* Add an image to the right of "Background" */}
          <div className="row">
            <div className="col-md-6">
              <h2>Background</h2>
              <p>
            Mild Cognitive Impairment (MCI) causes a slight but noticeable decline in mental abilities, such as memory loss and impaired thinking. People with MCI have a much higher risk of going on to develop dementia.
          </p>
          <p>
            Previous research has shown that regular exercise may help improve brain health and prevent dementia. This study is comparing the effectiveness of three different kinds of exercise on memory and thinking abilities.
          </p>
          <p>
            This study seeks men and women aged 60+ who have noticed a slight decline in their memory and/or other mental abilities. Participants will be randomly assigned to one of three different exercise training groups:
          </p>
          <ul>
            <li>a) Strength training group,</li>
            <li>b) Aerobic training group, or</li>
            <li>c) Balance, toning & mobility training group.</li>
          </ul>
          <p>
            Participants will be invited to attend 3 supervised exercise sessions per week for 12 months at the research site in Lidcombe.
          </p>
            </div>
            <div className="col-md-6">
              <img
                src={myImage}
                alt="Image Description"
                className="img-fluid"
              />
            </div>
          </div>
          
          <h2>Benefits to Participation</h2>
          <ul>
            <li>You may experience an improvement in your memory and other aspects of your physical and mental well-being.</li>
            <li>You will receive supervised exercise training sessions 3 days per week for 1 year at no cost to yourself.</li>
            <li>You will receive a comprehensive geriatric assessment by the study physician and research team, including a physical examination, stress test, bone scan, MRI scan of your brain, metabolic and cardiovascular health profile, evaluation of your nutritional status, fitness assessment, fall risk assessment, and full evaluation of your cognitive function.</li>
            <li>You receive free parking at the research site.</li>
          </ul>

          <h2>Your Rights</h2>
          <ul>
          <li>If you decide to participate in the study and later feel that you no longer wish to be part of it, you may withdraw at any time.</li>
          <li>Your records relating to this study and any other information received will be kept strictly confidential, except as required by the law.</li>
          <li>Qualified health professionals will monitor your health as it relates to the study.</li>
         </ul>

    <h2>Who Can Participate?</h2>
<       p>Men and women aged 60+ years old who:</p>
        <ul>
        <li>Have noticed a slight decline in their memory and/or other mental </li>
        <li><u>Have not</u> been diagnosed with dementia or a progressive neurological disease (such as Parkinson’s Disease)</li>
        <li>Are able to walk without the assistance of another person (use of assistive device is fine)</li>
        <li><u>Do not</u> exercise more than 2.5 hours per week at moderate or vigorous intensity</li>
        <li>Are able to attend 3 exercise sessions per week at the research site over 12 months</li>
        <li>Do not plan to be away for 4 or more <u>consecutive weeks</u> over the next 12 months, and are not planning to move.</li>
        </ul>
        </div>
        <div className="col-lg-4">
          {/* Add a website ad to the right */}
          <div className="card custom-ad-card">
            <div className="card-body">
              {/* Replace this with your ad code or content */}
              <h1 className="card-title text-white text-center">Next Steps</h1>
              <p className="card-text text-white text-center">
                1. Complete a brief questionnaire <br></br>
                2. Receive a comprehensive geriatric assessment by the study physician and research team
              </p>
              <a
                target="_blank"
                href="https://forms.gle/hfA2nREfWpHTh6416"
                className="btn btn-warning d-block mx-auto">
                Take the Questionnaire
              </a>
            </div>
          </div>
          <br></br>
          <img
                src={myMap}
                alt="Image Description"
                className="img-fluid"
              />
        </div>
      </div>
    </div>
  );
}

export default Index;