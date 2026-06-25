import type { ComponentType } from 'react';
import { ApiConsumptionTopic } from './ApiConsumptionTopic';
import { ConditionalRenderingTopic } from './ConditionalRenderingTopic';
import { ContextApiTopic } from './ContextApiTopic';
import { ControlledFormsTopic } from './ControlledFormsTopic';
import { ListMapTopic } from './ListMapTopic';
import { LocalVsGlobalStateTopic } from './LocalVsGlobalStateTopic';
import { PropsCallbacksTopic } from './PropsCallbacksTopic';
import { ReactRouterTopic } from './ReactRouterTopic';
import { UseEffectTopic } from './UseEffectTopic';
import { UseStateTopic } from './UseStateTopic';

export type TopicRoute = {
  slug: string;
  title: string;
  Component: ComponentType;
};

export const topicRoutes: TopicRoute[] = [
  { slug: 'use-state', title: 'useState', Component: UseStateTopic },
  { slug: 'use-effect', title: 'useEffect', Component: UseEffectTopic },
  { slug: 'props-callbacks', title: 'Props e callbacks', Component: PropsCallbacksTopic },
  {
    slug: 'renderizacao-condicional',
    title: 'Renderização condicional',
    Component: ConditionalRenderingTopic,
  },
  { slug: 'listas-map', title: 'Listas com map()', Component: ListMapTopic },
  {
    slug: 'formularios-controlados',
    title: 'Formulários controlados',
    Component: ControlledFormsTopic,
  },
  { slug: 'consumo-api', title: 'Consumo de API', Component: ApiConsumptionTopic },
  { slug: 'react-router', title: 'React Router', Component: ReactRouterTopic },
  { slug: 'context-api', title: 'Context API', Component: ContextApiTopic },
  {
    slug: 'estado-local-global',
    title: 'State local vs global',
    Component: LocalVsGlobalStateTopic,
  },
];
