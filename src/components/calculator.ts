import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCalculator(element: HTMLElement) {
  element.innerHTML = `
      <style>
        .calculator-wrapper {
          font-family: 'DM Sans', sans-serif;
          color: white;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        .calculator-container {
          background: rgba(5, 5, 8, 0.7);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem 2.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .calculator-container:hover {
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
        }
        .calc-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: white;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
        }
        .calc-header p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 16px;
          margin-bottom: 2rem;
        }
        .calc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 900px) {
          .calc-grid { grid-template-columns: 1.5fr 1fr; }
        }
        .input-block h3 {
          font-size: 14px;
          color: rgba(255,255,255,0.9);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-family: 'JetBrains Mono', monospace;
        }
        /* Buttons */
        .area-btn {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.02);
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        .area-btn:hover {
          background: rgba(255,255,255,0.08);
          color: white;
          transform: translateY(-2px);
        }
        .area-btn.active {
          border-color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.1);
          color: white;
          box-shadow: 0 4px 15px rgba(255,255,255,0.05);
        }
        /* Checkboxes */
        .tools-toggle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          gap: 0.75rem;
        }
        .tool-toggle { display: none; }
        .tool-label {
          display: block;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.5);
          text-align: center;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 13px;
        }
        .tool-label:hover {
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.8);
          transform: translateY(-2px);
        }
        .tool-toggle:checked + .tool-label {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
          color: white;
        }
        /* Sliders */
        .sleek-slider-group { margin-bottom: 1.5rem; }
        .sleek-slider-group label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }
        .slider-val-highlight {
          color: white;
          font-family: 'JetBrains Mono', monospace;
          font-weight: bold;
          font-size: 14px;
          font-variant-numeric: tabular-nums;
          min-width: 70px;
          text-align: right;
          display: inline-block;
        }
        input[type=range] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width: 100%;
          background: transparent;
          outline: none;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          margin-top: -7px;
          transition: transform 0.2s;
          box-shadow: 0 0 6px rgba(255,255,255,0.4);
        }
        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.3);
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 2px;
          cursor: pointer;
          background: rgba(255,255,255,0.45);
          border-radius: 2px;
        }
        input[type=range]:hover::-webkit-slider-runnable-track {
          background: rgba(255,255,255,0.7);
        }
        /* Firefox */
        input[type=range]::-moz-range-track {
          width: 100%;
          height: 2px;
          cursor: pointer;
          background: rgba(255,255,255,0.45);
          border-radius: 2px;
          border: none;
        }
        input[type=range]::-moz-range-thumb {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 6px rgba(255,255,255,0.4);
        }
        /* Results */
        .calc-results {
          background: rgba(0,0,0,0.4);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: background 0.4s;
          min-height: 420px;
        }
        .calc-results:hover {
          background: rgba(0,0,0,0.6);
        }
        .results-header {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 0.5rem;
        }
        .total-waste {
          font-family: 'Syne', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          font-variant-numeric: tabular-nums;
          min-height: 58px;
          white-space: nowrap;
        }
        .breakdown-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px dashed rgba(255,255,255,0.1);
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }
        .breakdown-row span:last-child {
          font-family: 'JetBrains Mono', monospace;
          color: white;
          font-variant-numeric: tabular-nums;
          min-width: 120px;
          text-align: right;
        }
        .btn-calc {
          width: 100%;
          padding: 1rem;
          border-radius: 8px;
          background: white;
          color: black;
          font-family: 'Syne', sans-serif;
          font-weight: bold;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1.5rem;
        }
        .btn-calc:hover {
          background: rgba(255,255,255,0.8);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255,255,255,0.1);
        }
      </style>

      <div class="calculator-wrapper" style="perspective: 1000px; padding: 2rem 0;">
        <div class="calculator-container" style="transform-origin: top center;">
          <div class="calc-header">
           <h2>Interactive ROI Calculator</h2>
           <p>For a 10-person team, our clients typically see <strong>$558K-$934K</strong> in combined annual ROI.</p>
        </div>
        
        <div class="calc-grid">
          <div class="calc-inputs" style="display: flex; flex-direction: column; gap: 2rem;">
            
            <div class="input-block">
                <h3>1. Streamline Target</h3>
                <div class="area-toggle-grid" style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2rem;">
                  <button class="area-btn active" data-area="Sales & Lead Gen" data-preset="sales">💰 Sales & Lead Gen</button>
                  <button class="area-btn" data-area="Customer Support" data-preset="support">💬 Customer Support</button>
                  <button class="area-btn" data-area="Internal Operations" data-preset="ops">⚙️ Internal Operations</button>
                  <button class="area-btn" data-area="Marketing & Outreach" data-preset="marketing">📣 Marketing & Outreach</button>
                  <button class="area-btn" data-area="Data & Analytics" data-preset="data">📊 Data & Analytics</button>
                </div>
            </div>

            <div class="input-block">
                <h3>2. Review your typical SaaS stack</h3>
                <div class="tools-toggle-grid">
                  <div><input type="checkbox" id="t-trello" class="tool-toggle" name="tool" value="15" checked><label for="t-trello" class="tool-label">Trello</label></div>
                  <div><input type="checkbox" id="t-asana" class="tool-toggle" name="tool" value="25"><label for="t-asana" class="tool-label">Asana</label></div>
                  <div><input type="checkbox" id="t-monday" class="tool-toggle" name="tool" value="30"><label for="t-monday" class="tool-label">Monday.com</label></div>
                  <div><input type="checkbox" id="t-pipedrive" class="tool-toggle" name="tool" value="65" checked><label for="t-pipedrive" class="tool-label">Pipedrive</label></div>
                  <div><input type="checkbox" id="t-hubspot" class="tool-toggle" name="tool" value="90"><label for="t-hubspot" class="tool-label">HubSpot</label></div>
                  <div><input type="checkbox" id="t-salesforce" class="tool-toggle" name="tool" value="75"><label for="t-salesforce" class="tool-label">Salesforce</label></div>
                  <div><input type="checkbox" id="t-slack" class="tool-toggle" name="tool" value="15" checked><label for="t-slack" class="tool-label">Slack</label></div>
                  <div><input type="checkbox" id="t-docusign" class="tool-toggle" name="tool" value="40"><label for="t-docusign" class="tool-label">DocuSign</label></div>
                  <div><input type="checkbox" id="t-zapier" class="tool-toggle" name="tool" value="20" checked><label for="t-zapier" class="tool-label">Zapier</label></div>
                  <div><input type="checkbox" id="t-make" class="tool-toggle" name="tool" value="20"><label for="t-make" class="tool-label">Make.com</label></div>
                  <div><input type="checkbox" id="t-tableau" class="tool-toggle" name="tool" value="70"><label for="t-tableau" class="tool-label">Tableau</label></div>
                  <div><input type="checkbox" id="t-zendesk" class="tool-toggle" name="tool" value="55"><label for="t-zendesk" class="tool-label">Zendesk</label></div>
                  <div><input type="checkbox" id="t-intercom" class="tool-toggle" name="tool" value="60"><label for="t-intercom" class="tool-label">Intercom</label></div>
                  <div><input type="checkbox" id="t-mailchimp" class="tool-toggle" name="tool" value="40"><label for="t-mailchimp" class="tool-label">Mailchimp</label></div>
                </div>
            </div>
  
            <div class="input-block">
                <h3>3. Evaluate hidden time costs</h3>
                
                <div class="sleek-slider-group">
                  <label><span>Manual Hours Wasted (Per Person/Week)</span> <span class="slider-val-highlight" id="hours-display">10</span></label>
                  <input type="range" id="hours-slider" min="1" max="40" value="10" />
                </div>
                
                <div class="sleek-slider-group">
                  <label><span>Total Team Size</span> <span class="slider-val-highlight" id="team-display">5</span></label>
                  <input type="range" id="team-slider" min="1" max="50" value="5" />
                </div>
  
                <div class="sleek-slider-group">
                  <label><span>Average Hourly Rate ($)</span> <span class="slider-val-highlight" id="rate-display">50</span></label>
                  <input type="range" id="rate-slider" min="10" max="150" value="50" step="5" />
                </div>
            </div>
            
          </div>
          
          <div class="calc-results">
            <div class="results-header">Total Estimated Annual Waste</div>
            <div class="total-waste" id="total-waste">$120,000</div>
            
            <div class="waste-breakdown">
              <div class="breakdown-row">
                <span>Annual SaaS Subscriptions</span>
                <span id="saas-cost">$0</span>
              </div>
              <div class="breakdown-row">
                <span>Annual Time Opportunity Cost</span>
                <span id="time-cost">$120,000</span>
              </div>
            </div>
            
            <p style="font-size: 16px; color: rgba(255,255,255,0.5); margin-top: 2rem; line-height: 1.5;">
               A custom AI System from AIZEN eliminates SaaS sprawl and supercharges your <span id="dynamic-area-text" style="color: #00ffff; font-weight: bold;">Sales & Lead Gen</span>.
            </p>
            
            <button class="btn-calc">Claim Your Free Audit</button>
          </div>
        </div>
        </div>
      </div>
    `;

  // GSAP 3D Tilt Animation
  setTimeout(() => {
    const calcContainer = element.querySelector(".calculator-container");
    if (calcContainer) {
      gsap.fromTo(
        calcContainer,
        { rotateX: -30, y: 150, opacity: 0, scale: 0.9 },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          },
        },
      );
    }
  }, 100);

  const hoursSlider = element.querySelector(
    "#hours-slider",
  ) as HTMLInputElement;
  const teamSlider = element.querySelector("#team-slider") as HTMLInputElement;
  const rateSlider = element.querySelector("#rate-slider") as HTMLInputElement;
  const tools = element.querySelectorAll(
    ".tool-toggle",
  ) as NodeListOf<HTMLInputElement>;

  const hoursDisplay = element.querySelector("#hours-display")!;
  const teamDisplay = element.querySelector("#team-display")!;
  const rateDisplay = element.querySelector("#rate-display")!;
  const saasCostDisplay = element.querySelector("#saas-cost")!;
  const timeCostDisplay = element.querySelector("#time-cost")!;
  const totalWasteDisplay = element.querySelector("#total-waste")!;

  const updateCalculations = () => {
    const hours = parseInt(hoursSlider.value);
    const team = parseInt(teamSlider.value);
    const rate = parseInt(rateSlider.value);

    hoursDisplay.textContent = hours.toString() + " hrs";
    teamDisplay.textContent = team.toString() + " staff";
    rateDisplay.textContent = "$" + rate.toString() + "/hr";

    let totalToolMonthlyCostPerUser = 0;
    tools.forEach((t) => {
      if (t.checked) {
        totalToolMonthlyCostPerUser += parseInt(t.value);
      }
    });

    const annualSaasCost = totalToolMonthlyCostPerUser * team * 12;
    const timeCost = hours * team * rate * 52;
    const totalWaste = annualSaasCost + timeCost;

    saasCostDisplay.textContent = "$" + annualSaasCost.toLocaleString();
    timeCostDisplay.textContent = "$" + timeCost.toLocaleString();
    totalWasteDisplay.textContent = "$" + totalWaste.toLocaleString();
  };

  const areaBtns = element.querySelectorAll(".area-btn");
  const dynamicAreaText = element.querySelector("#dynamic-area-text")!;

  const applyPreset = (preset: string, areaName: string) => {
    dynamicAreaText.textContent = areaName;
    tools.forEach((t) => (t.checked = false));
    (element.querySelector("#t-slack") as HTMLInputElement).checked = true;
    (element.querySelector("#t-zapier") as HTMLInputElement).checked = true;

    if (preset === "sales") {
      hoursSlider.value = "15";
      (element.querySelector("#t-pipedrive") as HTMLInputElement).checked =
        true;
      (element.querySelector("#t-hubspot") as HTMLInputElement).checked = true;
    } else if (preset === "support") {
      hoursSlider.value = "20";
      (element.querySelector("#t-zendesk") as HTMLInputElement).checked = true;
      (element.querySelector("#t-intercom") as HTMLInputElement).checked = true;
    } else if (preset === "ops") {
      hoursSlider.value = "25";
      (element.querySelector("#t-asana") as HTMLInputElement).checked = true;
      (element.querySelector("#t-monday") as HTMLInputElement).checked = true;
      (element.querySelector("#t-docusign") as HTMLInputElement).checked = true;
    } else if (preset === "marketing") {
      hoursSlider.value = "12";
      (element.querySelector("#t-hubspot") as HTMLInputElement).checked = true;
      (element.querySelector("#t-mailchimp") as HTMLInputElement).checked =
        true;
    } else if (preset === "data") {
      hoursSlider.value = "18";
      (element.querySelector("#t-tableau") as HTMLInputElement).checked = true;
      (element.querySelector("#t-make") as HTMLInputElement).checked = true;
    }
    updateCalculations();
  };

  areaBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      areaBtns.forEach((b) => {
        b.classList.remove("active");
      });
      const target = e.target as HTMLElement;
      target.classList.add("active");
      applyPreset(
        target.getAttribute("data-preset")!,
        target.getAttribute("data-area")!,
      );
    });
  });

  hoursSlider.addEventListener("input", updateCalculations);
  teamSlider.addEventListener("input", updateCalculations);
  rateSlider.addEventListener("input", updateCalculations);
  tools.forEach((t) => t.addEventListener("change", updateCalculations));
  updateCalculations();
}
