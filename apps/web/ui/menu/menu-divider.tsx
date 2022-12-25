interface MenuDividerProps {
  title?: string;
}

export const MenuDivider = ({ title }: MenuDividerProps): JSX.Element => {
  return (
    <div className="flex items-center mt-4 mb-1 ml-4">
      {title && (
        <h2 className="text-xs font-semibold tracking-wide text-light/30">
          {title}
        </h2>
      )}
      <hr className="flex-grow ml-3 border-hint/10" />
    </div>
  );
};
