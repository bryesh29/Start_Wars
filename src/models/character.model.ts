export interface ICharacterState {
  characterLoading: boolean;
  character: ICharacter[];
  characterError: boolean;
}

export interface ICharacter {
  name: string;
  description: string;
}
