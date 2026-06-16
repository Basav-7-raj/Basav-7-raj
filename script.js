const planetsData = [
    {
        name: "Mercury",
        type: "Terrestrial Planet",
        distance: "57.9 million km",
        radius: "2,439.7 km",
        period: "88 days",
        moons: "0",
        description: "Mercury is the smallest planet in our solar system and the closest to the Sun. It is only slightly larger than Earth's Moon. It has a solid, cratered surface, much like the Earth's moon.",
        color: "#b0c4de",
        size: 8,
        orbitRadius: 60,
        speed: 4
    },
    {
        name: "Venus",
        type: "Terrestrial Planet",
        distance: "108.2 million km",
        radius: "6,051.8 km",
        period: "225 days",
        moons: "0",
        description: "Venus is the second planet from the Sun and our closest planetary neighbor. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
        color: "#deb887",
        size: 14,
        orbitRadius: 90,
        speed: 6
    },
    {
        name: "Earth",
        type: "Terrestrial Planet",
        distance: "149.6 million km",
        radius: "6,371 km",
        period: "365.25 days",
        moons: "1",
        description: "Our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things. It's the only planet in our solar system with liquid water on the surface.",
        color: "#4169e1",
        size: 15,
        orbitRadius: 130,
        speed: 8
    },
    {
        name: "Mars",
        type: "Terrestrial Planet",
        distance: "227.9 million km",
        radius: "3,389.5 km",
        period: "687 days",
        moons: "2",
        description: "Mars is the fourth planet from the Sun. It is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was – billions of years ago – wetter and warmer, with a thicker atmosphere.",
        color: "#cd5c5c",
        size: 10,
        orbitRadius: 170,
        speed: 10
    },
    {
        name: "Jupiter",
        type: "Gas Giant",
        distance: "778.5 million km",
        radius: "69,911 km",
        period: "12 years",
        moons: "79+",
        description: "Jupiter is the fifth planet from the Sun and the largest in the solar system. It is a gas giant with a mass more than two and a half times that of all the other planets in the solar system combined.",
        color: "#daa520",
        size: 30,
        orbitRadius: 240,
        speed: 20
    },
    {
        name: "Saturn",
        type: "Gas Giant",
        distance: "1.4 billion km",
        radius: "58,232 km",
        period: "29 years",
        moons: "82+",
        description: "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets.",
        color: "#f4a460",
        size: 25,
        orbitRadius: 310,
        speed: 30
    },
    {
        name: "Uranus",
        type: "Ice Giant",
        distance: "2.9 billion km",
        radius: "25,362 km",
        period: "84 years",
        moons: "27",
        description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. It rotates on its side, making it unique.",
        color: "#87ceeb",
        size: 18,
        orbitRadius: 370,
        speed: 40
    },
    {
        name: "Neptune",
        type: "Ice Giant",
        distance: "4.5 billion km",
        radius: "24,622 km",
        period: "165 years",
        moons: "14",
        description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
        color: "#0000cd",
        size: 18,
        orbitRadius: 420,
        speed: 50
    }
];

document.addEventListener('DOMContentLoaded', () => {
    generateStars();
    renderSolarSystem();
    setupModal();
});

function generateStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Randomize size
        const size = Math.random() * 3;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Randomize opacity
        star.style.opacity = Math.random();

        starsContainer.appendChild(star);
    }
}

function renderSolarSystem() {
    const container = document.getElementById('solar-system');

    planetsData.forEach(planet => {
        // Create orbit
        const orbit = document.createElement('div');
        orbit.classList.add('orbit');
        orbit.style.width = `${planet.orbitRadius * 2}px`;
        orbit.style.height = `${planet.orbitRadius * 2}px`;
        orbit.style.top = `calc(50% - ${planet.orbitRadius}px)`;
        orbit.style.left = `calc(50% - ${planet.orbitRadius}px)`;
        container.appendChild(orbit);

        // Create container for rotation
        const planetContainer = document.createElement('div');
        planetContainer.classList.add('planet-container');
        planetContainer.style.animationDuration = `${planet.speed}s`;

        // Create planet
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.style.width = `${planet.size}px`;
        planetDiv.style.height = `${planet.size}px`;
        planetDiv.style.backgroundColor = planet.color;
        // Position planet on its orbit
        planetDiv.style.top = `calc(50% - ${planet.size / 2}px)`;
        planetDiv.style.left = `calc(50% + ${planet.orbitRadius}px - ${planet.size / 2}px)`;

        // Add label
        const label = document.createElement('div');
        label.classList.add('planet-label');
        label.innerText = planet.name;
        // Position label above the planet
        label.style.top = `calc(50% - ${planet.size / 2}px - 20px)`;
        label.style.left = `calc(50% + ${planet.orbitRadius}px - ${planet.size / 2}px)`;
        planetContainer.appendChild(label);

        // Add click event for modal
        planetDiv.addEventListener('click', () => {
            showPlanetInfo(planet);
        });

        planetContainer.appendChild(planetDiv);
        container.appendChild(planetContainer);
    });
}

function setupModal() {
    const modal = document.getElementById('info-modal');
    const closeBtn = document.getElementById('close-modal');

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close when clicking outside modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

function showPlanetInfo(planet) {
    document.getElementById('planet-name').innerText = planet.name;
    document.getElementById('planet-type').innerText = planet.type;
    document.getElementById('planet-distance').innerText = planet.distance;
    document.getElementById('planet-radius').innerText = planet.radius;
    document.getElementById('planet-period').innerText = planet.period;
    document.getElementById('planet-moons').innerText = planet.moons;
    document.getElementById('planet-description').innerText = planet.description;

    document.getElementById('info-modal').classList.remove('hidden');
}
