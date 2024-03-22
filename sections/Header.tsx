export interface Props {
      title: string;
}

export default function Header({ title }: Props) {
      return (
            <header>
                  <h1> Este é o header do batman </h1>
            </header>
      )
}