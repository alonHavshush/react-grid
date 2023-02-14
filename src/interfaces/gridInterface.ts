

export interface gridComponent {
  ComponentName: React.FC;
  index: number;
  props: object;
}


interface GridPropsBasic {
  index?: number
}

export interface LinkGridProps extends GridPropsBasic {
  link: string;
  title: string
}

export interface DivGridProps extends GridPropsBasic {
  message: string
}

export interface ParagraphGridProps extends GridPropsBasic {
  title: string;
  paragraph: string;
}
