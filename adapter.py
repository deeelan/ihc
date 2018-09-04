# Pontificia Universidad Javeriana Cali
# Interfaz Humano-Computador
# Dilan Madhava Chávez Molano
# 2018 - 2

class Mini_Controller(object):

	"""docstring for Mini_Controller"""
	def __init__(self, paellaPrice, ivaCalculate, originalPrice):
		super(Mini_Controller, self).__init__();

		self.paellaPrice = paellaPrice;
		self.ivaCalculate = ivaCalculate;
		self.originalPrice = originalPrice;

	def getValueCoin():
		pass;

	def getValuePrice():
		pass;

	def buildPaella():
		pass;

class Adapter(object):
	
	"""docstring for Adapter"""
	def __init__(self, dolar, conversion):
		super(Adapter, self).__init__();
		self.dolar = dolar;
		self.conversion = conversion;

	def CalculatePriceDolar():
		return dolar * conversion;

	def calculatePaellaPrice(paella):
		return paella.getValuePrice() * CalculatePriceDolar();