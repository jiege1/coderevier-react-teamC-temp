
import { ComponentType } from 'react';
import { Model, EffectsMapObject, connect } from 'dva';

export interface IActionCreator<P> {
  type: string;
  payload?: Partial<P>;
}

export type Reducer<S> = (state: S, action: IActionCreator<S>) => S;

export interface IModel<S, R> extends Model {
  state: S;
  // effects: E;
  reducers: {
    [K in keyof R]: Reducer<S>;
  };
}

// export type IConnect<StateProps, DispatchProps, OwnProps = {}> = (
//   mapStateToProps?: (state) => { [K: string]: StateProps },
//   mapDispatchToProps?: (dispatch: () => any) => DispatchProps,
//   mergeProps?: (StateProps, DispatchProps, OwnProps) => StateProps & DispatchProps & OwnProps,
//   options?: Object
// ) => (Com: ComponentType) => ComponentType;

// export interface IConnect<StateProps, DispatchProps, OwnProps = {}> {
//   (
//     mapStateToProps?: (state) => { [K: string]: StateProps }
//   ): (ComponentType) => Component;

//   (
//     mapStateToProps: (state) => { [K: string]: StateProps },
//     mapDispatchToProps?: (dispatch: (action: any) => any) => DispatchProps,
//   ): (ComponentType) => Component;
// }
