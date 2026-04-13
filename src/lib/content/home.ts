export type HomeOutcome = {
  id: string;
  kicker: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  body: string;
  proof: string;
  railLabel: string;
};

export type HomeSynthesis = {
  id: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  body: string;
  proof: string;
  railLabel: string;
};

export const homeOutcomes = [
  {
    id: 'signal',
    kicker: 'Outcome 01',
    headlinePrefix: 'give products a ',
    headlineHighlight: 'point of view',
    headlineSuffix: ' before the interface says a word.',
    body: 'I sharpen structure, hierarchy, and motion so the work reads clearly from first glance to shipped detail.',
    proof: 'Stronger first impression.',
    railLabel: 'Launch signal'
  },
  {
    id: 'system',
    kicker: 'Outcome 02',
    headlinePrefix: 'turn design systems into ',
    headlineHighlight: 'engineering infrastructure',
    headlineSuffix: '.',
    body: 'The system stays practical, opinionated, and maintainable while architecture and quality scales across the team.',
    proof: 'System quality at scale.',
    railLabel: 'System clarity'
  },
  {
    id: 'motion',
    kicker: 'Outcome 03',
    headlinePrefix: 'use ',
    headlineHighlight: 'motion',
    headlineSuffix: ' to explain, pace, and focus — never to decorate.',
    body: 'Transitions carry hierarchy and attention so complex interfaces feel obvious.',
    proof: 'Motion with a job.',
    railLabel: 'Motion discipline'
  },
  {
    id: 'handoff',
    kicker: 'Outcome 04',
    headlinePrefix: 'leave teams with a sharper',
    headlineHighlight: 'handoff',
    headlineSuffix: ', not a prettier mess.',
    body: 'Concept, interface, and implementation move together so teams can ship, extend, mentor, and lead through the work after launch.',
    proof: 'Cleaner team handoff.',
    railLabel: 'Team handoff'
  }
] satisfies HomeOutcome[];

export const homeSynthesis = {
  id: 'synthesis',
  headlinePrefix: 'build product systems that ',
  headlineHighlight: 'land with authority',
  headlineSuffix: '.',
  body: 'Engineering quality, design, architecture, and leadership reinforce each other instead of arriving as separate layers.',
  proof: 'From first impression to durable system.',
  railLabel: 'Ledger complete'
} satisfies HomeSynthesis;
