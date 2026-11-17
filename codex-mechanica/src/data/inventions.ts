export type SchematicKind =
  | 'wright-flyer'
  | 'microchip-wafer'
  | 'robotic-hand'
  | 'orbital-network'
  | 'space-telescope';

export interface InventionPlate {
  id: string;
  title: string;
  imagePath: string;
  imageAlt: string;
  quote: string;
  quoteAuthor: string;
  schematic: SchematicKind;
}

export const INVENTIONS: InventionPlate[] = [
  {
    id: 'wright-flyer',
    title: 'Powered Flight',
    imagePath: '/src/assets/images/pure_sketch_wright_flyer_1794916539434.jpg',
    imageAlt:
      'Archival sepia ink technical sketch of an early twin-wing powered biplane with propeller, rigging wires, and aerodynamic lift streamlines.',
    quote:
      'It is possible to fly without motors, but not without knowledge and skill.',
    quoteAuthor: 'Wilbur Wright',
    schematic: 'wright-flyer',
  },
  {
    id: 'microchip-wafer',
    title: 'The Silicon Microchip',
    imagePath: '/src/assets/images/pure_sketch_microchip_wafer_1794916539317.jpg',
    imageAlt:
      'Archival sepia ink technical sketch of a silicon microprocessor wafer and intricate circuit die surrounded by compass geometry.',
    quote:
      'Do not be encumbered by history. Go off and do something wonderful.',
    quoteAuthor: 'Robert Noyce',
    schematic: 'microchip-wafer',
  },
  {
    id: 'robotic-hand',
    title: 'Precision Mechatronics',
    imagePath: '/src/assets/images/pure_sketch_robotic_hand_1794916539889.jpg',
    imageAlt:
      'Archival sepia ink technical sketch of an articulated mechanical robotic hand and forearm with exposed planetary gears and tension cables.',
    quote: 'The best way to predict the future is to invent it.',
    quoteAuthor: 'Alan Kay',
    schematic: 'robotic-hand',
  },
  {
    id: 'orbital-network',
    title: 'Global Connectivity',
    imagePath: '/src/assets/images/pure_sketch_orbital_network_1794916539591.jpg',
    imageAlt:
      'Archival sepia ink technical sketch of a global satellite communications array orbiting Earth above a parabolic observatory dish.',
    quote: 'The science of today is the technology of tomorrow.',
    quoteAuthor: 'Edward Teller',
    schematic: 'orbital-network',
  },
  {
    id: 'space-telescope',
    title: 'Deep-Space Observatory',
    imagePath: '/src/assets/images/pure_sketch_space_telescope_1794916540783.jpg',
    imageAlt:
      'Archival sepia ink technical sketch of a hexagonal segmented-mirror space telescope unfolding above thermal sunshields and orbital geometry.',
    quote: 'Somewhere, something incredible is waiting to be known.',
    quoteAuthor: 'Carl Sagan',
    schematic: 'space-telescope',
  },
];
