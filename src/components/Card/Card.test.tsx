import { fireEvent, render, screen } from "@testing-library/react"
import Card from "@/components/Card"
import Character from "@/mocks/character"
import "@testing-library/jest-dom";

describe('[Components]: Card', () => {
    test('should be in the DOM', () => {
      render(<Card character={Character}/>);
      const button = screen.getByText('Redirecionar');
      expect(button).toBeInTheDocument();
    });
  });