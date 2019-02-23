#!/usr/bin/env python
# -*- coding: UTF-8 -*-
#
# Copyright 2015-2019, Vincenzo Arcidiacono;
# Licensed under the EUPL (the 'Licence');
# You may not use this work except in compliance with the Licence.
# You may obtain a copy of the Licence at: http://ec.europa.eu/idabc/eupl

""" Defines the dispatcher exception. """

__author__ = 'Vincenzo Arcidiacono <vinci1it2000@gmail.com>'


class DispatcherError(Exception):
    def __init__(self, *args, sol=None, **kwargs):
        super(DispatcherError, self).__init__(*args, **kwargs)
        self.plot = None
        self.sol = None
        self.update(sol)

    def update(self, sol):
        self.sol = sol
        self.plot = self.sol.plot if sol is not None else None


class DispatcherAbort(BaseException):
    pass


class SkipNode(BaseException):
    def __init__(self, *args, ex=None, **kwargs):
        super(SkipNode, self).__init__(*args, **kwargs)
        self.ex = ex


class ExecutorShutdown(BaseException):
    pass
