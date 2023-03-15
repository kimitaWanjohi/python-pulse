const bars = document.getElementById('bars');
const menu = document.getElementById('menu');
const speakers = document.getElementById('speakers');
const nav = document.getElementById('nav');

const closeMenu = () => {
  const barsChild = bars.children[0];
  if (barsChild.classList.contains('fa-bars')) {
    barsChild.classList.remove('fa-bars');
    barsChild.classList.add('fa-times');
    menu.classList.add('top-[60px]');
    menu.classList.add('opacity-100');
    nav.classList.add('bg-white');
  } else {
    barsChild.classList.remove('fa-times');
    barsChild.classList.add('fa-bars');
    menu.classList.remove('opacity-100');
    menu.classList.remove('top-[80px]');
    nav.classList.remove('bg-white');
  }
};

const speakersData = [
  {
    image: './assets/speaker1.jpg',
    name: 'Bobby Lee',
    title: 'AI Research Scientist',
    description: 'AI research scientist with expertise in natural language processing and computer vision.',
  },
  {
    image: './assets/speaker2.jpg',
    name: 'Jason Patel',
    title: 'Cloud Solutions Architect',
    description: 'Cloud solutions architect with over a decade of experience helping organizations leverage the power of the cloud.',
  },
  {
    image: './assets/speaker3.jpg',
    name: 'Andrew Sanchez',
    title: 'Cybersecurity Analyst',
    description: 'Cybersecurity analyst with expertise in network security, penetration testing, and incident response.',
  },
  {
    image: './assets/speaker4.jpg',
    name: 'Mark Williams',
    title: 'Blockchain Developer',
    description: 'Blockchain developer with experience building smart contracts and applications on Ethereum and Binance Smart Chain.',
  },
  {
    image: './assets/speaker5.jpg',
    name: 'Emily Chen',
    title: 'Data Scientist',
    description: 'Data scientist with expertise in machine learning and statistical modeling for optimizing customer experiences.',
  },
  {
    image: './assets/speaker6.jpg',
    name: 'Sarah Nguyen',
    title: 'UX Designer',
    description: 'UX designer with a background in graphic design and front-end development, creating engaging interfaces for web and mobile applications.',
  },
];

speakersData.forEach((speaker) => {
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add('px-4', 'py-8');
  speakerDiv.innerHTML = `
                            <div class="flex items-center justify-center gap-2 relative">
                            <img src="assets/python.png" class="absolute top-[-15px] left-[-25px] h-[80px]">
                            <div class= "overflow-hidden w-2/3 z-10 first-line:file:bg-cover bg-center">
                                <img src="${speaker.image}" class="h-[120px] w-[120px]">
                            </div>
                            <div>
                                <h3 class="text-primary text-xl text-start font-bold">
                                    ${speaker.name}
                                </h3>
                                <h5 class="text-secondary text-lg text-start font-semibold">
                                    ${speaker.title}
                                </h5>
                                <hr class="w-[20px] border-2 border-grey my-2">
                                <p class="text-gray-500 text-start mt-3">
                                    ${speaker.description}
                                </p>
                            </div>
                        </div>`;
  speakers.appendChild(speakerDiv);
});

bars.addEventListener('click', closeMenu);