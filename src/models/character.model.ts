export interface ICharacterState {
  characterLoading: boolean;
  character: ICharacter[];
  characterError: boolean;
}

export interface ICharacter {
  id: string;
  name: string;
  description: string;
}
