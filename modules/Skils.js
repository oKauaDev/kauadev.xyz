const skills = [
  {
    tag: "HTML",
    color: "#E34C26",
    rgbaColor: "rgba(227, 76, 38, 0.3)",
    porcentage: 90,
  },
  {
    tag: "CSS",
    color: "#264DE4",
    rgbaColor: "rgba(38, 77, 228, 0.3)",
    porcentage: 80,
  },
  {
    tag: "JavaScript",
    color: "#F7DF1E",
    rgbaColor: "rgba(247, 223, 30, 0.3)",
    porcentage: 70,
  },
  {
    tag: "PHP",
    color: "#777BB4",
    rgbaColor: "rgba(119, 123, 180, 0.3)",
    porcentage: 93,
  },
  {
    tag: "React",
    color: "#61DAFB",
    rgbaColor: "rgba(97, 218, 251, 0.3)",
    porcentage: 67,
  },
  {
    tag: "Vue.js",
    color: "#4FC08D",
    rgbaColor: "rgba(79, 192, 141, 0.3)",
    porcentage: 59,
  },
  {
    tag: "Web D.",
    color: "#FFC107",
    rgbaColor: "rgba(255, 193, 7, 0.3)",
    porcentage: 79,
  },
  {
    tag: "UX D.",
    color: "#546E7A",
    rgbaColor: "rgba(84, 110, 122, 0.3)",
    porcentage: 75,
  },
  {
    tag: "Mysql",
    color: "#4479A1",
    rgbaColor: "rgba(68, 121, 161, 0.3)",
    porcentage: 34,
  },
];

function createSkills(containerSelector) {
  const container = document.querySelector(containerSelector);

  skills.forEach((skill) => {
    const div = document.createElement("div");
    div.classList.add("skill");
    div.style.color = skill.color;
    div.innerHTML = `
      <h1>${skill.tag}</h1>
      <div class="progressbar" style="background: ${skill.rgbaColor};">
        <div style="background: ${skill.color};  width: ${skill.porcentage}%;"></div>
      </div>
    `;

    container.appendChild(div);
  });
}

export default createSkills;
