// Example panel data: one array per panel UL
const panelData = [
    // product
  [
    {
      img: "https://pab-ns.github.io/epic1/images/pathway/PRODUCT_Product-Owner.png",
      name: "Product Owner",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/40-epic-product-owner-icpapo"
    },
    {
      img: "https://pab-ns.github.io/epic1/images/pathway/PRODUCT_Human-Centered-Design.png",
      name: "Human Centered Design",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/"
    },
    {
      img: "https://pab-ns.github.io/epic1/images/pathway/PRODUCT_Product-Manager.png",
      name: "Product Manager",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/"
    },
  ],
//   delivery
  [
  {
    name: "Team Facilitator",
    enrolLink: "https://training.epicagile.com.au/w/au/courses/",
    img: "https://pab-ns.github.io/epic1/images/pathway/DELIVERY_Team-Facilitator.png",
  },
  {
    name: "Delivery Manager",
    enrolLink: "https://training.epicagile.com.au/w/au/courses/",
    img: "https://pab-ns.github.io/epic1/images/pathway/DELIVERY_delivery-Manager.png",
  },
  {
    name: "Lean Portfolio Management",
    enrolLink: "https://training.epicagile.com.au/w/au/courses/",
    img: "https://pab-ns.github.io/epic1/images/pathway/DELIVERY_Lean-Portfolio-Manager.png",
  },    
  ],
  // leadership
  [
    {
      name: "Agile for Leaders",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/84-agile-for-leaders",
      img: "https://pab-ns.github.io/epic1/images/pathway/LEADERSHIP_Agile for Leaders.png",
    },
    {
      name: "Capability Leadership",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/89-leading-chapters",
      img: "https://pab-ns.github.io/epic1/images/pathway/LEADERSHIP_Capability-Leadership.png",
    },
    {
      name: "Leadership Agility",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/",
      img: "https://pab-ns.github.io/epic1/images/pathway/LEADERSHIP_Leadership-Agility.png",
    },
  ],
  // foundations
  [
    {
      name: "Agile Foundations",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/36-agile-foundations-for-teams",
      img: "https://pab-ns.github.io/epic1/images/pathway/FOUNDATIONS_agile-foundations.png",
      desc: "Effectively apply agile values and principles to the roles, events & artefacts of a self-organising cross-functional team.",
    },
    {
      name: "Scaling Agile",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/106-epic-scaling-agile-tribe-crew-foundations",
      img: "https://pab-ns.github.io/epic1/images/pathway/FOUNDATIONS_Scaling-Agile.png",
    },
    {
      name: "AgilityHealth Facilitator",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/",
      img: "https://pab-ns.github.io/epic1/images/pathway/FOUNDATIONS_AgilityHealth.png",
    },
    {
      name: "Business Agility Foundations",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/86-business-agility-foundations-icpbaf",
      img: "https://pab-ns.github.io/epic1/images/pathway/FOUNDATIONS_Business-Agility.png",
    },
    {
      name: "Leading Scaled Agile",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/90-epic-tribe-crew-foundations",
      img: "https://pab-ns.github.io/epic1/images/pathway/FOUNDATIONS_Leading-Scaled-Agile.png",
    },
  ],
// coaching
[
    {
      img: "https://pab-ns.github.io/epic1/images/pathway/COACHING_Coach.png",
      name: "Coach",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/38-epic-coach-icpacc"
    },
    {
      name: "Enterprise Coach",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/79-enterprise-agile-coaching-icpent",
      img: "https://pab-ns.github.io/epic1/images/pathway/COACHING_Enterprise-Coach.png",
    },
    {
      name: "Transformation Coach",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/80-coaching-agile-transformation-icpcat",
      img: "https://pab-ns.github.io/epic1/images/pathway/COACHING_Transformation-Coach.png",
    },
    {
      name: "Expert Coach",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/",
      img: "https://pab-ns.github.io/epic1/images/pathway/COACHING_Expert-Coach.png",
    },
  ]
];

// Loop through each panel data set
panelData.forEach((panelItems, index) => {
  const className = `.panel-ul-${index + 1}`;
  const uls = document.querySelectorAll(className);

  uls.forEach((ul) => {
    ul.innerHTML = ""; // Clear existing content

    panelItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'flex justify-start items-center md:text-sm hover:text-epicGreen duration-300';
      li.innerHTML = `
        <img src="${item.img}" alt="${item.name}" width="50" class="pr-2">
        <a href="${item.enrolLink}" target="_blank">${item.name}</a>
      `;
      ul.appendChild(li);
    });
  });
});