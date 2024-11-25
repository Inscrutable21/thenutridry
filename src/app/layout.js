import './globals.css'
import PropTypes from 'prop-types'

export const metadata = {
  title: 'Under Construction',
  description: 'Our website is coming soon',
}

function UnderConstructionLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

UnderConstructionLayout.propTypes = {
  children: PropTypes.node
};

export default UnderConstructionLayout;