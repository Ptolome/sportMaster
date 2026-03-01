import { FC } from 'react';

interface IProps {
  isFavorite: boolean;
}
const FavoritButton: FC<IProps> = ({ isFavorite }) => {
  return (
    <button>
      {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
    </button>
  );
};

export default FavoritButton;
