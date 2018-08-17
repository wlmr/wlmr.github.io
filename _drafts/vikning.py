import numpy as np
import matplotlib.pyplot as plt
from matplotlib.widgets import Slider, Button, RadioButtons

fig, ax = plt.subplots()
plt.subplots_adjust(left=0.25, bottom=0.25)

F0,Fs = 100,300

t = np.arange(0, 10/Fs, 0.0001)
n = np.arange(0, 10/Fs, 1 / Fs)

# Initially plotting the signals: a - analogue, 
# s - sample points, f - sample frequency
a, = plt.plot(t, np.sin(2*np.pi*F0*t), 'k-')
s, = plt.plot(n, np.sin(2*np.pi*F0*n), 'bo') 
f, = plt.plot(t, np.sin(2*np.pi*F0*t), 'b-', alpha=0.4)

plt.axis([0, 10/Fs, -2, 2])

axfreq = plt.axes([0.25, 0.1, 0.65, 0.03])
sfreq = Slider(axfreq, 'analogue signal frequency: ', F0/10, F0*10, valinit=F0)

def sampler(F,x):
    return np.sin(2*np.pi*F*x)

def f0(F0,Fs):
    return ((F0/Fs)-round(F0/Fs))*Fs

def update(val):
    F0 = sfreq.val
    a.set_ydata(sampler(F0,t)) 
    s.set_ydata(sampler(F0,n)) 
    f.set_ydata(sampler(f0(F0,Fs),t))
    fig.canvas.draw_idle()
    
sfreq.on_changed(update)

plt.show()
