FROM node:6.11-onbuild

ENV PORT=2727
EXPOSE 2727

CMD ["npm", "start"]
