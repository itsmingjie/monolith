interface MenuDividerProps {
  title?: string;
}

export const MenuDivider = ({ title }: MenuDividerProps): JSX.Element => {
  return (
    <div className="mt-4 mb-1 ml-4 flex items-center">
      {title && (
        <h2 className="text-xs font-semibold tracking-wide text-light/30">
          {title}
        </h2>
      )}
      <hr className="ml-3 grow border-hint/10" />
    </div>
  );
};
