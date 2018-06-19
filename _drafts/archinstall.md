---
title: Arch à la Wilmer
layout: post
---

### pre
First we need to set up some temporary stuff to get the installation run smooth. 

#### keyboard key mapping
Since you're hopefully not american you need to change the keyboard key mapping. Type `ls /usr/share/kbd/keymaps/**/*.map.gz` and then issue loadkeys with whatever layout you found. For example: `loadkeys sv-latin1`.

#### Internet
###### If you have an ethernet cable connected you are probably good to go. 
Simply verify this with `ping archlinux.org`. If it gets stuck or if it exits with some error try issuing `dhcpcd` to request an ip.
###### More of a wireless guy? 
Copy a template and fill in some fields.
1. `cp /etc/netctl/examples/wireless-wpa /etc/netctl/PROFILENAME`
2. Run `ip a` and look for your wireless interface. Should be something like *wlp??s0*. You'll use this in the next step.
3. open up /etc/netctl/PROFILENAME and change the following fields:
  + interface 
  + ESSID
  + Key
4. `netctl start PROFILENAME`

#### Update system clock
`timedatectl set-ntp true`

#### Partitioning and formatting the disks
The storage is split up into _block devices_. e.g. /dev/sdx. Choose which block device you want to install arch on by issuing `fdisk -l`. When you have decided follow the following steps:
1. `fdisk /dev/sdx`
2. type `o` to blank the storage.
3. type `n` to create a new partition.
4. press enter, enter, enter and enter to make everything one partition.
5. type `a` to apply a boot flag.
6. type `w` to write all of the above. BEWARE: NO TURNING BACK. 

Many people prefer separating / (applications) and ~ (personal files) into two different partitions. This way if you fuck up your system completely you can still salvage the other partition for your questionable porn collection. This way, however, you get to enjoy complete freedom, never having to worry that one partition might run out space; leaving you to have to repartition the shitworks.

Regarding formatting the standard option is to use ext4 for the normal file systems.
If you've followed this shit guide so far you should run `mkfs.ext4 /dev/sda1`

###### UEFI

### install


### post
