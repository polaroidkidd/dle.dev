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
    headlinePrefix: 'give launches a ',
    headlineHighlight: 'point of view',
    headlineSuffix: ' before the product says a word.',
    body: 'I sharpen the story, hierarchy, and motion so launches land with conviction.',
    proof: 'Stronger first impression.',
    railLabel: 'Launch signal'
  },
  {
    id: 'system',
    kicker: 'Outcome 02',
    headlinePrefix: 'turn design systems into ',
    headlineHighlight: 'brand-bearing infrastructure',
    headlineSuffix: '.',
    body: 'The system stays practical, but the product stops feeling anonymous.',
    proof: 'Identity-aware components.',
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
    body: 'Concept, interface, and implementation move together so the work holds up after launch.',
    proof: 'Cleaner team handoff.',
    railLabel: 'Team handoff'
  }
] satisfies HomeOutcome[];

export const homeSynthesis = {
  id: 'synthesis',
  headlinePrefix: 'build product moments that ',
  headlineHighlight: 'land with authority',
  headlineSuffix: '.',
  body: 'Brand, interface, and implementation reinforce each other instead of arriving as separate layers.',
  proof: 'From first impression to shipped system.',
  railLabel: 'Ledger complete'
} satisfies HomeSynthesis;
