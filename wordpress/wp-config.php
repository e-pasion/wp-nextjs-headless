<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wpheadless' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'O$Z0Y&T!Lr:n}UEnur}e-*.k]3,%^Y,BAX%b5cZ7J|hs9/;-:hLc2nyxUKhuS?*t' );
define( 'SECURE_AUTH_KEY',  '0RFMgX[#U?rsoUJ%CF7h==ymb<]CB!2s=9&n{4A#NU]%oycS4>i~2%X<ykSiN(RN' );
define( 'LOGGED_IN_KEY',    'sP>k8BOhG6m*W.97=~7b]uA}S%{}!G6vy0a@nNFXeM1P=al}7Z+kE.u[#*R05?c?' );
define( 'NONCE_KEY',        '}+ YU i&9LS7__6wpv JYE{$=O}YcAj,sI[:qmuVPM<AP030lB2M,$,3xkd7p@2A' );
define( 'AUTH_SALT',        '7PB0&wvJx~ oYn/Yo9Mp,t>^@U&wz]RWD?)ne=G;)&mS4eon)qo,l.SZx.gbtO`G' );
define( 'SECURE_AUTH_SALT', '[-:B^K}ZDW/@n*rX|:AVfrcR/mLs4fl3=D7g79A.kf9=n@T=&AC;QhXBJ8M,!RNw' );
define( 'LOGGED_IN_SALT',   '5_MLA?TtiQ7*?p1UA/Xvt~v9RcpiizHp>b {mS*0a3W)-?$R{#t3Dt><W-h=sE$<' );
define( 'NONCE_SALT',       '[=_]j8YdLMmPRIEL|:%>7t=T%#@1oDJgze^v;fJ`&WF>Xa3]Qt_tCQN_F(YoS9jc' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
