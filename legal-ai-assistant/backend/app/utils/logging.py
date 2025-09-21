import logging
import sys

# Configure the logging settings
def setup_logging(log_level=logging.INFO):
    logging.basicConfig(
        level=log_level,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.StreamHandler(sys.stdout),
            logging.FileHandler('app.log')
        ]
    )

# Create a logger instance
logger = logging.getLogger(__name__)

# Utility function to log an info message
def log_info(message):
    logger.info(message)

# Utility function to log a warning message
def log_warning(message):
    logger.warning(message)

# Utility function to log an error message
def log_error(message):
    logger.error(message)

# Utility function to log critical messages
def log_critical(message):
    logger.critical(message)